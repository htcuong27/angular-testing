import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "../home/components/home-page/home-page.component";
import { ReviewAnswerComponent } from "./components/review-answer/review-answer.component";
import { ReviewBuilderComponent } from "./components/review-builder/review-builder.component";
import { ReviewComponent } from "./review.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'form/builder',
        pathMatch: 'full'
    },
    {
        path: 'form',
        redirectTo: 'form/builder',
        pathMatch: 'full'
    },
    {
        path: 'form',
        children: [
            {
                path: 'builder',
                pathMatch: 'full',
                component: ReviewBuilderComponent,
              },
              {
                path: 'answers',
                pathMatch: 'full',
                component: ReviewAnswerComponent,
              },
        ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ReviewRouteModule {}