import { ref, computed } from "vue ";

const langs = [{ locale: "en" }, { locale: "sv" }];

const lng = ref("en");

const current = computed(() => langs.find((e) => e.locale == lng.value) || {});

const set = (val) => {
  lng.value = val;
  console.log(`setLanguage lng =>`, lng.value);
};

const reset = () => {
  //lng = ref("en"); // Bad. This will "only" make computed lose reactivity
  //lng = "en"; // Bad.  This will both destroy computed and make set assert
  lng.value = "en";
  console.log(`resetLanguage lng =>`, lng.value);
};

export function useLanguages() {
  return {
    current,
    set,
    reset,
  };
}
