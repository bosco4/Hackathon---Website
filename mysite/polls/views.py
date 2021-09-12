from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index_j.html', context)


def details(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/details.html', {'question': question})


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


def game_breath(request, *a):
    return render(request, 'polls/game_breath.html', None)


def questionnaire(request, *a):
    return render(request, 'polls/questionnaire.html', None)


def physical_health(request, *a):
    return render(request, 'polls/physical_health.html', None)


def sources(request, *a):
    return render(request, 'polls/sources.html', None)
