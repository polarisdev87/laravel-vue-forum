<template>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            v-model="form.password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Пароль"
            :error-messages="hint"
            :error="!valid.password && showErrors"
            counter
            @click:append="show = !show"
          />
        </v-flex>
      </v-layout>
</template>

<script>
export default {
  props: ["valid", "form", "min", "confirm", "confirm_error"],
  data() {
    return {
      show: false,
      showErrors: false,
      rules: {
        required: v => !!v || "Обязательное поле.",
        min: v => {
          const m = this.min || 1;
          return (m > v.length && `Минимум символов: ${m}`) || true;
        }
      }
    };
  },
  watch: {
    "form.password"() {
      this.showErrors = true;
    }
  },
  computed: {
    hint() {
      if (!this.showErrors) return "";
      const minTest = this.minTest("password");
      if (minTest) return minTest;

      this.valid.password = true;
      return "";
    }
  },
  methods: {
    minTest(name) {
      if (this.min > this.form[name].length) {
        this.valid[name] = false;
        return `Минимум символов - ${this.min}`;
      }
    }
  }
};
</script>
