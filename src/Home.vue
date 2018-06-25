<template>
  <div>
    <section>
      <v-jumbotron
        height="800px"
        src="public/Hero.png"
        >
        <v-container fill-width fill-height>
          <v-layout
        column
        align-center
        justify-center
        class="white--text mt-5"
        >
        <h1 class="white--text mt-5 display-2 text-xs-center">Building Better Software</h1>
        <h1 class="white--text mt-2 display-3 text-xs-center">Together</h1>
        <v-btn
            class="mt-5"
            color="info"
            dark
            large
            @click="moreInfo"
            >
            Let's Chat
        </v-btn>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </section>
<section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="display-3">Our Values</h2>
              <h3 class="display-1">
                Why we're so awesome to work with
              </h3>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">chat</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Communication</div>
                    </v-card-title>
                    <v-card-text>
                      We start by making sure we understand your application, your domain, and getting a clear overview of exactly what you want done and why.
                      <br/><br/>Daily updates of what we work on, what's up next, and any questions we might have.

                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Speed</div>
                    </v-card-title>
                    <v-card-text>
                      We understand that real projects have real deadlines. We're flexible with our hours and able to accommodate your timeline.
                      <br/><br/>
                      Our expertise allows us to get familiar with your codebase quickly, and begin providing value as fast as possible.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Quality</div>
                    </v-card-title>
                    <v-card-text name="ScrollHere" class="scrollHere">
                      We have experience consulting on Agile Best Practices, Test Driven Development, and bringing Technical Expertise to any project.
                      <br/>
                      <br/>
                      As generalists our Senior Developers are able to instantly provide value, whether joining an existing team, or leading the charge on new development.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <v-layout
          wrap
          class="my-5 odd"
          justify-center
        >
          <v-flex xs12 sm5 class="my-5">
            <div class="text-xs-center">
              <h2 class="white--text display-3 mb-3">Ready to get started?</h2>
            </div>
		<v-form class="form pa-5" ref="form">
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        label="Phone"
        mask="phone"
      ></v-text-field>
      <v-select
        :items="items"
        v-model="preference"
        label="Contact Method"
        single-line
      ></v-select>
      <v-text-field
        v-model="help"
        label="How can we help?"
        required
        multi-line
      ></v-text-field>
        <v-flex
        class="layout"
        justify-center
          >
      <v-btn
        v-if="success"
        @click="submit"
        :loading="loading"
        :disabled="loading"
      >
        <v-icon x-large class="green--text text--lighten-2">check_circle</v-icon>
      </v-btn>

      <v-btn
        v-else-if="failure"
        @click="submit"
        :loading="loading"
        :disabled="loading"
      >
        <v-icon x-large class="red--text text--lighten-2">error</v-icon>
      </v-btn>

      <v-btn
        v-else
        @click="submit"
        :loading="loading"
        :disabled="loading"
      >
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
        </v-flex>
    </v-form>
          </v-flex>
        </v-layout>
      </section>
      <div class="bottom"/>
  </div>
</template>

<script>
import Axios from 'axios';
  export default {
    data () {
      return {
        name: "",
        email: "",
        phone: "",
        help: "",
        loading: false,
        success: false,
        failure: false,
        preference: "",
        items: [
          { text: "Phone" },
          { text: "Email" },
        ]
      }
    },
    methods: {
      moreInfo () {
        this.$vuetify.goTo(".bottom", {
          duration: 500,
          easing: "easeInOutCubic",
          offset: 100,
        });
      },
      submit () {
        this.loading = true;
        Axios.post('https://formspree.io/xekzzjkx',
        {
          name: this.name,
          email: this.email,
          phone: this.phone,
          preference: this.preference,
          request: this.help,
        })
        .then((response) => {
          this.loading = false;
          this.success = true;
          this.failure = false;
        }).catch((response) => {
          this.loading = false;
          this.failure = true;
          this.success = false;
        });
      },
      clear () {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.help =  "";
        preference: "";
        this.success =  false;
        this.failure =  false;
      }
    }
  }
</script>
<style>
.odd {
  background-color: #00777c;
}
.form {
  background-color: white;
}
</style>
