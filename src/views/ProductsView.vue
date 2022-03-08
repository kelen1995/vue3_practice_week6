<template>
  <div id="app">
    <div class="container">
      <div class="mt-4">
        <!-- 產品Modal -->
        <!-- <product-modal
          :product="tempProduct"
          @add-carts="updateCarts"
          ref="productModal"
        ></product-modal>
        <del-product-modal
          @delete-product="deleteCarts"
          ref="delModal"
        ></del-product-modal> -->

        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                ></div>
              </td>
              <td>
                {{ product.title }}
              </td>
              <td>
                <div class="h5">{{ product.price }} 元</div>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <!-- <div class="h5">現在只要 {{  }} 元</div> -->
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="openProductModal(product)"
                  >
                    <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="
                      updateCarts('add', { product_id: product.id, qty: 1 })
                    "
                  >
                    <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <pagination
          :pagination="pagination"
          @switch-page="getProducts"
        ></pagination> -->
        <!-- 購物車列表 -->
        <div class="text-end">
          <button
            class="btn btn-outline-danger"
            type="button"
            :class="{ disabled: cart.carts.length < 1 }"
            @click="openDelProductModal('all', '所有')"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 150px">數量/單位</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts.length > 0">
              <tr v-for="cart in cart.carts" :key="cart.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="
                      openDelProductModal('single', cart.product.title, cart)
                    "
                  >
                    <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                    x
                  </button>
                </td>
                <td>
                  {{ cart.product.title }}
                  <div class="text-success">已套用優惠券</div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <div class="input-group mb-3">
                      <input
                        min="1"
                        type="number"
                        class="form-control"
                        v-model.lazy="cart.qty"
                        @change="updateCarts('edit', cart)"
                      />
                      <span class="input-group-text" id="basic-addon2">{{
                        cart.product.unit
                      }}</span>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <small class="text-success">折扣價：</small>
                  {{ cart.final_total }}
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="4" class="text-center">購物車目前沒有商品</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="my-5 row justify-content-center">
        <v-form
          ref="form"
          class="col-md-6"
          v-slot="{ errors }"
          @submit="submitOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <v-field
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="required|email"
              v-model.lazy="order.user.email"
            ></v-field>
            <error-message
              name="email"
              class="invalid-feedback"
            ></error-message>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <v-field
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model.lazy="order.user.name"
            ></v-field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <v-field
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|numeric|min:8"
              v-model.lazy="order.user.tel"
            ></v-field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <v-field
              id="address"
              name="地址"
              type="address"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model.lazy="order.user.address"
            ></v-field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model.lazy="order.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-danger">送出訂單</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      cart: {
        carts: [],
      },
      order: {
        user: {},
        message: '',
      },
      apiUrl: process.env.VUE_APP_URL,
      apiPath: process.env.VUE_APP_PATH,
    };
  },
  methods: {
    getProducts(page = 1) {
      // 取得商品列表
      const loader = this.$loading.show();
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products?page=${page}`)
        .then((res) => {
          loader.hide();
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    openProductModal(product) {
      this.tempProduct = { qty: 1, ...product };
      this.$refs.productModal.openModal();
    },
    hideProductModal() {
      this.$refs.productModal.hideModal();
    },
    getCarts() {
      // 取得購物車列表
      const loader = this.$loading.show();
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/cart`)
        .then((res) => {
          loader.hide();
          this.cart = res.data.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    updateCarts(status, cart) {
      // 新增/修改購物車
      const { id, product_id: productId, qty } = cart;
      // 新增購物車
      let method = 'post';
      let url = `${this.apiUrl}/api/${this.apiPath}/cart/`;

      if (status === 'edit') {
        // 更新購物車商品數量
        method = 'put';
        url = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`;
      }

      // 發送請求
      this.axios[method](url, {
        data: {
          product_id: productId,
          qty,
        },
      })
        .then(() => {
          this.hideProductModal();
          this.getCarts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCarts(status, cart) {
      let url = '';
      if (status === 'all') {
        // 刪除全部購物車
        url = `${this.apiUrl}/api/${this.apiPath}/carts/`;
      } else if (status === 'single') {
        url = `${this.apiUrl}/api/${this.apiPath}/cart/${cart.id}`; // 刪除一筆購物車商品
      }
      this.axios
        .delete(url)
        .then(() => {
          this.hideDelProductModal();
          this.getCarts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openDelProductModal(status, title, cart) {
      this.$refs.delModal.openModal(status, title, cart);
    },
    hideDelProductModal() {
      this.$refs.delModal.hideModal();
    },
    submitOrder() {
      if (this.cart.carts.length < 1) {
        // 若購物車沒有資料，不發出請求
        alert('購物車目前沒有商品');
        return;
      }
      const loader = this.$loading.show();

      this.axios
        .post(`${this.apiUrl}/api/${this.apiPath}/order`, {
          data: { ...this.order },
        })
        .then((res) => {
          loader.hide();
          const { message, total } = res.data;
          alert(`${message}，總金額為 ${total}`);
          this.$refs.form.resetForm();
          this.order.message = '';
          this.getCarts();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCarts();
  },
};
</script>
