class LightService {

  get LIGHT_FULL_URL() {
    return `http://${this.LIGHT_SERVER_IP}:${this.LIGHT_SERVER_PORT}`;
  }

  get LIGHT_SERVER_IP() {
    return process.env.REACT_APP_LIGHT_SERVER_IP;
  }

  get LIGHT_SERVER_PORT() {
    return process.env.REACT_APP_LIGHT_SERVER_PORT;
  }

  getStatus() {
    const STATUS_ENDPOINT = '/status';
    const url = `${this.LIGHT_FULL_URL}${ STATUS_ENDPOINT }`;

    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.status;
      });
  }

  setOn() {
    const STATUS_ENDPOINT = '/set-demo-mode';
    const url = `${this.LIGHT_FULL_URL}${ STATUS_ENDPOINT }`;

    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.status;
      });
  }

  setOff() {
    const STATUS_ENDPOINT = '/off';
    const url = `${this.LIGHT_FULL_URL}${ STATUS_ENDPOINT }`;

    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.status;
      });
  }
}

const lightService = new LightService();

export { lightService };