---
title: NetworkVoteDetails
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| NetworkVoteDetails()                         | Create a new instance of this structure type.            |
| NetworkVoteDetails(NetworkVoteDetails other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| issuer   | number |             |
| personal | bool   |             |
| voteId   | number |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [NetworkVoteDetails](/vext/ref/fb/networkvotedetails/) | [Clone](#clone) |            |

### Clone

> [NetworkVoteDetails](/vext/ref/fb/networkvotedetails/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
