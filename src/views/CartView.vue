<template>
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
              @click="openDelProductModal('single', cart.product.title, cart)"
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
        <error-message name="email" class="invalid-feedback"></error-message>
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
</template>
