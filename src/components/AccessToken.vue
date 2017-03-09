<template>

</template>

<script>
  import moment from 'moment';
  import queryString from 'query-string';
  import router from '../router';

  export default {
    name: 'AccessToken',
    created() {
      this.setAccessTokenOrRedirect();
      // router.push('/');
    },
    methods: {
      setAccessTokenOrRedirect() {
        const hash = queryString.parse(this.$route.hash);
        const error = hash.error;
        const accessToken = hash.access_token;
        const tokenType = hash.token_type;
        const expiresAt = moment().add(parseInt(hash.expires_in, 10), 'seconds');

        if (error) {
          router.push('login');
        }

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenType', tokenType);
        localStorage.setItem('expiresAt', expiresAt);
      },
    },
  };
</script>
