import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { Grid } from "@mui/material";


export default function Home() {
  return (
    <main>
      <Grid container columnSpacing={2}>
        <Grid item sm={6} >
          <LoginForm />
        </Grid>
        <Grid item sm={6} >
          <RegisterForm />
        </Grid>
      </Grid>

    </main>
  );
}
