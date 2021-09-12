from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    path('<int:question_id>/details', views.details, name='details'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),

    path('game_breath/', views.game_breath, name='game_breath'),

    path('questionnaire/', views.questionnaire, name='questionnaire'),

    path('physical_health/', views.physical_health, name='physical_health'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
