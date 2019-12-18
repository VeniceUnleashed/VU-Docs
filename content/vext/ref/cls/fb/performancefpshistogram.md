---
title: PerformanceFpsHistogram (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| PerformanceFpsHistogram()                              | Create a new instance of this structure type.            |
| PerformanceFpsHistogram(PerformanceFpsHistogram other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| below5  | number |             |
| below10 | number |             |
| below15 | number |             |
| below20 | number |             |
| below25 | number |             |
| below30 | number |             |
| below60 | number |             |
| above60 | number |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [PerformanceFpsHistogram](PerformanceFpsHistogram) | [Clone](#clone) |            |

### Clone

> [PerformanceFpsHistogram](PerformanceFpsHistogram) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
