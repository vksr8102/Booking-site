import axios from "axios";
import { promises } from "dns";
import pako from 'pako';



class HotelApi {
  async getHotel(data: any) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_KEY}/Availability/EnquiryByDestination`,
        data
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async fetchHotel(id: any) {
    // B6C905E417
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/Availability/GetEnquiryComp2/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        const binaryString = window.atob(response.data);
        console.log(binaryString);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        console.log(bytes);
        let decompressedData = await pako.ungzip(bytes, { to: 'string' });
        console.log(decompressedData);
        decompressedData = JSON.parse(decompressedData);
        return decompressedData;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const hotelApi = new HotelApi();
