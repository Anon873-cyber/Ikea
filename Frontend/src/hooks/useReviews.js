import { useEffect, useState } from "react";
import api from "../api/axios";

function useReviews(productId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) return;

    const controller = new AbortController();

    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/reviews/${productId}`, {
          signal: controller.signal,
        });

        setReviews(response.data.data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();

    return () => controller.abort();
  }, [productId]);

  return { reviews, loading, error };
}

export default useReviews;
