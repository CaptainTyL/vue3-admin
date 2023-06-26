<template>
  <div class="login-layout">
    <div class="login-container">
      <div class="login-lang"></div>
      <div class="login-content">
        <div class="top">
          <div class="header">
            <a href="/">
              <img src="@/assets/vue.svg" class="logo" alt="logo" />
              <span class="title">耘仓智能平台</span>
            </a>
          </div>
          <div class="desc"></div>
        </div>
        <div class="main">
          <!-- 登录表单 -->
          <a-form :model="form" ref="formLogin" id="formLogin" class="login-form">
            <a-tabs v-model:activeKey="customActiveKey" :tabBarStyle="{ borderBottom: 'unset' }">
              <a-tab-pane key="tab1" tab="账户密码登录">
                <a-form-item name="name" :rules="[{ required: true, message: '请输入账号' }]">
                  <a-input
                    v-model:value="form.name"
                    size="large"
                    type="text"
                    placeholder="请输入账号"
                  >
                    <template #prefix>
                      <user-outlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item name="password" :rules="[{ required: true, message: '请输入密码' }]">
                  <a-input-password
                    v-model:value="form.password"
                    size="large"
                    placeholder="请输入密码"
                  >
                    <template #prefix>
                      <lock-outlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                    </template>
                  </a-input-password>
                </a-form-item>
              </a-tab-pane>
              <a-tab-pane key="tab2" tab="手机号登录">
                <a-form-item name="mobile" :rules="[{ required: true, message: '请输入账号' }]">
                  <a-input
                    v-model:value="form.mobile"
                    size="large"
                    type="text"
                    placeholder="手机号"
                  >
                    <template #prefix>
                      <user-outlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-row :gutter="16">
                  <a-col class="gutter-row" :span="16">
                    <a-form-item
                      name="smsCode"
                      :rules="[{ required: true, message: '请输入验证码' }]"
                    >
                      <a-input
                        v-model:value="form.smsCode"
                        size="large"
                        type="text"
                        placeholder="验证码"
                      >
                        <template #prefix>
                          <mail-outlined :style="{ color: 'rgba(0,0,0,.25)' }" />
                        </template>
                      </a-input>
                    </a-form-item>
                  </a-col>
                  <a-col class="gutter-row" :span="8">
                    <!-- v-text="
                        (!state.smsSendBtn && $t('user.register.get-verification-code')) ||
                        state.time + ' s'
                      " -->
                    <a-button class="getCaptcha" tabindex="-1">发送验证码</a-button>
                  </a-col>
                </a-row>
              </a-tab-pane>
            </a-tabs>
            <a-form-item>
              <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]"
                >记住密码</a-checkbox
              >
              <!-- <router-link
                :to="{ name: 'recover', params: { user: 'aaa' } }"
                class="forge-password"
                style="float: right"
                >忘记密码</router-link
              > -->
            </a-form-item>
            <a-form-item style="margin-top: 24px">
              <a-button size="large" type="primary" class="login-button" @click="loginSubmit"
                >登录</a-button
              >
            </a-form-item>
            <div class="user-login-other">
              <span>其他登录方式</span>
              <a>
                <wechat-outlined class="item-icon" />
              </a>
            </div>
          </a-form>
        </div>
        <div class="footer">
          <div class="links">
            <a href="_self">帮助</a>
            <a href="_self">隐私</a>
            <a href="_self">条款</a>
          </div>
          <div class="copyright">Copyright &copy; 2023 Goram</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { WechatOutlined, UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  import { login } from '@/api/auth'

  const form = ref({
    name: '',
    password: '',
    mobile: '',
    smsCode: ''
  })
  const formLogin = ref(null)

  const customActiveKey = ref('tab1')

  const loginSubmit = () => {
    formLogin.value.validateFields().then(() => {
      // 执行登录操作
      login({ name: form.value.name, password: form.value.password }).then(res => {
        console.log(res)
      })
    })
  }
</script>
<style lang="less" scoped>
  .login-layout {
    height: 100%;
    .login-container {
      width: 100%;
      min-height: 100%;
      background: #f0f2f5 url(@/assets/background.svg) no-repeat 50%;
      background-size: 100%;
      position: relative;
      > .login-lang {
        width: 100%;
        height: 40px;
        line-height: 44px;
        text-align: right;
      }
      > .login-content {
        padding: 32px 0 24px;
        .top {
          text-align: center;

          .header {
            height: 44px;
            line-height: 44px;
            .badge {
              position: absolute;
              display: inline-block;
              line-height: 1;
              vertical-align: middle;
              margin-left: -12px;
              margin-top: -10px;
              opacity: 0.8;
            }
            .logo {
              height: 44px;
              vertical-align: top;
              margin-right: 16px;
              border-style: none;
            }
            .title {
              font-size: 33px;
              color: rgba(0, 0, 0, 0.85);
              font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
              font-weight: 600;
              position: relative;
              top: 2px;
            }
          }
          .desc {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            margin-top: 12px;
            margin-bottom: 40px;
          }
        }
        .main {
          min-width: 260px;
          width: 368px;
          margin: 0 auto;
          > .login-form {
            label {
              font-size: 14px;
            }
            .getCaptcha {
              display: block;
              width: 100%;
              height: 40px;
            }
            .forge-password {
              font-size: 14px;
            }
            button.login-button {
              padding: 0 15px;
              font-size: 16px;
              height: 40px;
              width: 100%;
            }
            .user-login-other {
              text-align: left;
              margin-top: 24px;
              line-height: 22px;
              .item-icon {
                font-size: 24px;
                color: rgba(0, 0, 0, 0.2);
                margin-left: 16px;
                vertical-align: middle;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                  color: #1890ff;
                }
              }
              .register {
                float: right;
              }
            }
          }
        }
        .footer {
          // position: absolute;
          width: 100%;
          bottom: 0;
          padding: 0 16px;
          margin: 48px 0 24px;
          text-align: center;

          .links {
            margin-bottom: 8px;
            font-size: 14px;
            a {
              color: rgba(0, 0, 0, 0.45);
              transition: all 0.3s;
              &:not(:last-child) {
                margin-right: 40px;
              }
            }
          }
          .copyright {
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
