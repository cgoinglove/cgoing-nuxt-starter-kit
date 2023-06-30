<template>
  <div>
    {{ x }}
    <VBtn>hello</VBtn>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/types/User";
import { IS_SERVER } from "@/utils/config";

import dayjs from "dayjs";

console.log(IS_SERVER, "여긴 둘다의 공간", dayjs().format("YYYY-MM-DD"));

const { x } = useSize();

const {} = useAsyncData(() => {
  console.log(`only Server 1`);
  return new Promise(resolve => {
    console.log(`only Server 2`);
    setTimeout(() => {
      console.log(`only Server 3`);
      resolve("ok");
    }, 3000);
  });
});

const person: User = {
  name: "",
  age: 12,
};
</script>

<style lang="scss" scoped></style>
