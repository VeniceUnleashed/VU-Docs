---
title: EndPointData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| EndPointData()                   | Create a new instance of this structure type.            |
| EndPointData(EndPointData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| pos                | number |             |
| endDamping         | number |             |
| springLength       | number |             |
| springAcceleration | number |             |
| springDamping      | number |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [EndPointData](/vext/ref/fb/endpointdata/) | [Clone](#clone) |            |

### Clone

> [EndPointData](/vext/ref/fb/endpointdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
