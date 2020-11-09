declare var require: any;
import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import exporting from "highcharts/modules/exporting";
import offline from "highcharts/modules/offline-exporting";
import { Evento, Sobre } from "../../interfaces/interfaces";
import { DataVotacionesService } from "../../services/data-votaciones.service";
import { DataGrafico } from "../../models/dataGrafico.model";
import HighchartsExporting from "highcharts/modules/exporting";

const Exporting = require("highcharts/modules/exporting");
Exporting(Highcharts);

exporting(Highcharts);
offline(Highcharts);
HighchartsExporting(Highcharts);

HighchartsNetworkgraph(Highcharts);

@Component({
  selector: "app-networkgraph",
  templateUrl: "./networkgraph.component.html",
  styleUrls: ["./networkgraph.component.scss"],
})
export class NetworkgraphComponent implements OnInit {
  @Input() evento: Evento = {};

  sobres: Sobre[] = [];

  votos: DataGrafico[] = [];

  votosSolidos = [];

  nodoGanador = "";

  title = "app";
  chart;
  updateFlag = false;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    chart: {
      type: "networkgraph",
      marginTop: 80,
      spacingRight: 290,
    },
    exporting: {
      enabled: true,
      allowHTML: true,
      chartOptions: {
        // specific options for the exported image
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
            },
          },
        },
      },
      fallbackToExportServer: true,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"],
        layoutAlgorithm: {
          enableSimulation: true,
          integration: "verlet",
          linkLength: 100,
        },
      },
    },
    navigation: {
      buttonOptions: {
        /*    verticalAlign: 'bottom',
          horizontalAlign: 'bottom',
          x: -270,
          y: 500, */
        x: -270,
        enabled: true,
      },
    },
    series: [
      {
        id: "language-tree",
        marker: {
          radius: 13,
        },
        dataLabels: {
          enabled: true,
          textPath: {
            enabled: true,
          },
          linkFormat: "",
          allowOverlap: true,
        },
        nodes: [
          {
            id: this.nodoGanador,
            dataLabels: {
              enabled: true,
            },
            marker: {
              radius: 1,
              fillColor: "white",
            },
          },
        ],
        data: [],
        color: "#E400FF",
      },
    ],
  };

  constructor(public dataVotaciones: DataVotacionesService) {
    const self = this;

    this.chartCallback = (chart) => {
      // saving chart reference
      self.chart = chart;
    };
  }

  ngOnInit() {
    this.verSobres(this.evento._id);
  }

  verSobres(idEvento) {
    let almacenaNodo = 0;

    this.dataVotaciones.verSobres(idEvento).subscribe((resp) => {
      this.sobres.push(...resp.sobres);

      resp.sobres.forEach((element) => {
        if (almacenaNodo < element.source.length) {
          this.nodoGanador = element.target;
          almacenaNodo = element.source.length;
        }
        element.source.forEach((source) => {
          let z = { from: source, to: element.target };
          this.votosSolidos.push(z);
        });
      });
    });
  }

  updateChart() {
    const self = this,
      chart = this.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();

      self.chartOptions.series = [
        {
          id: "language-tree",
          marker: {
            radius: 15,
          },
          dataLabels: {
            enabled: true,
            textPath: {
              enabled: true,
            },
            linkFormat: "",
            allowOverlap: true,
          },
          nodes: [
            {
              id: this.nodoGanador,
              dataLabels: {
                enabled: true,
              },
              marker: {
                radius: 25,
                fillColor: "#00AAFF",
              },
            },
          ],
          data: this.votosSolidos,
          color: "#E400FF",
        },
      ];

      self.chartOptions.plotOptions = {
        networkgraph: {
          keys: ["from", "to"],
          layoutAlgorithm: {
            enableSimulation: true,
            integration: "verlet",
            linkLength: 100,
          },
        },
      };

      self.chartOptions.exporting = {
        enabled: true,
        allowHTML: true,
        chartOptions: {
          // specific options for the exported image
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
              },
            },
          },
        },
        fallbackToExportServer: true,
      };

      self.updateFlag = true;
    }, 400);
  }
}
