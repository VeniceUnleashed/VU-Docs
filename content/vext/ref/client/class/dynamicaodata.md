---
title: DynamicAOData
---
## Description

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| DynamicAOData()                    | Create a new instance of this container type.            |
| DynamicAOData(DynamicAOData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name                   | Type                               | Description |
| ---------------------- | ---------------------------------- | ----------- |
| realm                  | [Realm](/vext/ref/fb/realm) |             |
| ssaoMaxDistanceOuter   | number                             |             |
| ssaoFade               | number                             |             |
| ssaoRadius             | number                             |             |
| ssaoMaxDistanceInner   | number                             |             |
| hbaoRadius             | number                             |             |
| hbaoAttenuation        | number                             |             |
| hbaoAngleBias          | number                             |             |
| hbaoPowerExponent      | number                             |             |
| hbaoContrast           | number                             |             |
| hbaoMaxFootprintRadius | number                             |             |
| enable                 | bool                               |             |

## Methods

| Type                                                | Name            | Parameters |
| --------------------------------------------------- | --------------- | ---------- |
| [DynamicAOData](/vext/ref/cls/clt/dynamicaodata) | [Clone](#clone) |            |

### Clone

> [DynamicAOData](/vext/ref/cls/clt/dynamicaodata) **Clone**()

Creates a shallow-copy clone of the instance.
