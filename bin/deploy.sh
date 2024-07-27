#!/bin/bash

SRC_PATH=public
ACC_NAME=pagedrop
PATH=4a5lvaq2

az storage blob upload-batch -s $SRC_PATH -d '$web' --account-name $ACC_NAME --destination-path $PATH
