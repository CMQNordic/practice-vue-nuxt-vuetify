import { ref, readonly, computed } from "vue ";

//let lng = ref("en"); // Bad. Always use const.
const lng = ref("en");

const current = computed(() => {
  return { locale: lng.value };
});

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

export function useLanguage() {
  return {
    current: readonly(current),
    set,
    reset,
  };
}
