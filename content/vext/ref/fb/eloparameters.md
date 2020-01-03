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
| kWinner     | [EloFunctionPoint](EloFunctionPoint)\[\]                 |             |
| kLoser      | [EloFunctionPoint](EloFunctionPoint)\[\]                 |             |
| kNewbie     | [EloFunctionPoint](EloFunctionPoint)\[\]                 |             |
| kCompetitor | [EloFunctionPoint](EloFunctionPoint)\[\]                 |             |
| expected    | [EloExpectedFunctionPoint](EloExpectedFunctionPoint)\[\] |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [EloParameters](EloParameters) | [Clone](#clone) |            |

### Clone

> [EloParameters](EloParameters) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
