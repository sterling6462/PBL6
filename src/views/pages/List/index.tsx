import { Grid } from "@mui/material";
import { Card } from "../../../components/card";
import Layout from "../../../components/layout";
import { dataList } from "../../data";
import styles from "./style.module.scss";

export default function List() {
  return (
    <Layout>
      <Grid container className={styles.Container}>
        {dataList.map((item) => (
          <Grid item padding={1} width={"100%"}>
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
