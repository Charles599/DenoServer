FROM hayd/alpine-deno:1.4.4

EXPOSE 8000

WORKDIR /svr

USER deno

COPY routes.ts .
RUN deno cache routes.ts

ADD . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]