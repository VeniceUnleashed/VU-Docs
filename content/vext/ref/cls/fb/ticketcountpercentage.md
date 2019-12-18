---
title: TicketCountPercentage (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| TicketCountPercentage()                            | Create a new instance of this structure type.            |
| TicketCountPercentage(TicketCountPercentage other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| maxPercentOfTicketsLeft | number |             |
| ticketLossPerMin        | number |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [TicketCountPercentage](TicketCountPercentage) | [Clone](#clone) |            |

### Clone

> [TicketCountPercentage](TicketCountPercentage) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
