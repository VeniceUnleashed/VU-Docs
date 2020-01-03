---
title: DynamicEnvmapData
---
## Description

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| DynamicEnvmapData()                        | Create a new instance of this container type.            |
| DynamicEnvmapData(DynamicEnvmapData other) | Create a reference copy of an instance of the same type. |

## Properties

| Name              | Type                              | Description |
| ----------------- | --------------------------------- | ----------- |
| keyColorEnvmap    | [Vec3](/vext/ref/shared/class/vec3) |             |
| groundColorEnvmap | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyColorEnvmap    | [Vec3](/vext/ref/shared/class/vec3) |             |
| enable            | bool                              |             |

## Methods

| Type                                                        | Name            | Parameters |
| ----------------------------------------------------------- | --------------- | ---------- |
| [DynamicEnvmapData](/vext/ref/client/class/dynamicenvmapdata) | [Clone](#clone) |            |

### Clone

> [DynamicEnvmapData](/vext/ref/client/class/dynamicenvmapdata) **Clone**()

Creates a shallow-copy clone of the instance.
