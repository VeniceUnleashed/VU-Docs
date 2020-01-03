---
title: EnlightenDbSystem
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| EnlightenDbSystem()                        | Create a new instance of this structure type.            |
| EnlightenDbSystem(EnlightenDbSystem other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type                                                  | Description |
| ------------------- | ----------------------------------------------------- | ----------- |
| boundingBox         | [AxisAlignedBox](/vext/ref/shared/class/axisalignedbox) |             |
| atlasStartX         | number                                                |             |
| atlasStartY         | number                                                |             |
| outputWidth         | number                                                |             |
| outputHeight        | number                                                |             |
| pixelCount          | number                                                |             |
| pixelSize           | number                                                |             |
| systemId            | number                                                |             |
| instances           | [EnlightenDbInstance](EnlightenDbInstance)\[\]        |             |
| inputSystems        | number\[\]                                            |             |
| systemCache         | [PrecomputeCache](PrecomputeCache)                    |             |
| clusteringCache     | [PrecomputeCache](PrecomputeCache)                    |             |
| preClusteringCache  | [PrecomputeCache](PrecomputeCache)                    |             |
| lightTransportCache | [PrecomputeCache](PrecomputeCache)                    |             |
| visibilityCache     | [PrecomputeCache](PrecomputeCache)                    |             |
| terrainSystem       | bool                                                  |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [EnlightenDbSystem](EnlightenDbSystem) | [Clone](#clone) |            |

### Clone

> [EnlightenDbSystem](EnlightenDbSystem) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
