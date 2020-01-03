---
title: EloParameters
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| EloParameters()                    | Create a new instance of this structure type.            |
| EloParameters(EloParameters other) | Create a reference copy of a structure of the same type. |

## Properties

| Name        | Type                                                     | Description |
| ----------- | -------------------------------------------------------- | ----------- |
| kWinner     | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint/)\[\]                 |             |
| kLoser      | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint/)\[\]                 |             |
| kNewbie     | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint/)\[\]                 |             |
| kCompetitor | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint/)\[\]                 |             |
| expected    | [EloExpectedFunctionPoint](/vext/ref/fb/eloexpectedfunctionpoint/)\[\] |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [EloParameters](/vext/ref/fb/eloparameters/) | [Clone](#clone) |            |

### Clone

> [EloParameters](/vext/ref/fb/eloparameters/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
