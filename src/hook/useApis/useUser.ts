import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UserService from "../../apis/services/UserService";

export const useUser = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: UserService.getAll,
  });

  const save = useMutation({
    mutationFn: (request) => UserService.save(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  return { users, isLoading, save };
};
