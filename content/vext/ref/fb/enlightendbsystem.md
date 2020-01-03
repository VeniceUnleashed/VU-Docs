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
| instances           | [EnlightenDbInstance](/vext/ref/fb/enlightendbinstance/)\[\]        |             |
| inputSystems        | number\[\]                                            |             |
| systemCache         | [PrecomputeCache](/vext/ref/fb/precomputecache/)                    |             |
| clusteringCache     | [PrecomputeCache](/vext/ref/fb/precomputecache/)                    |             |
| preClusteringCache  | [PrecomputeCache](/vext/ref/fb/precomputecache/)                    |             |
| lightTransportCache | [PrecomputeCache](/vext/ref/fb/precomputecache/)                    |             |
| visibilityCache     | [PrecomputeCache](/vext/ref/fb/precomputecache/)                    |             |
| terrainSystem       | bool                                                  |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [EnlightenDbSystem](/vext/ref/fb/enlightendbsystem/) | [Clone](#clone) |            |

### Clone

> [EnlightenDbSystem](/vext/ref/fb/enlightendbsystem/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
