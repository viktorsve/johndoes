export function numberFunction() {
  $(".print").click(function() {
    $(".screen").append($(this).text());
  });
}
