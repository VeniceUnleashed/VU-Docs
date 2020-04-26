---
title: RadarSweepComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[RadarSweepComponentData](#constructor-0)**() |
| **[RadarSweepComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RadarSweepComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[RadarSweepComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RadarSweepComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RadarSweepComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "controllableSpeedThreshold" >}} | float |
| {{< prop "controllableSweepRadius" >}} | float |
| {{< prop "controllableSweepInterval" >}} | float |
| {{< prop "mineSweepInterval" >}} | float |
| {{< prop "mineSweepRadius" >}} | float |
| {{< prop "sweepForMines" >}} | bool |
| {{< prop "sweepForControllables" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RadarSweepComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RadarSweepComponentData {#constructor-0}

> **RadarSweepComponentData**()

Creates a new [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata) frostbite instance.

### RadarSweepComponentData {#constructor-1}

> **RadarSweepComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RadarSweepComponentData {#constructor-2}

> **RadarSweepComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). |

### RadarSweepComponentData {#constructor-3}

> **RadarSweepComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). |

### RadarSweepComponentData {#constructor-4}

> **RadarSweepComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). |

### RadarSweepComponentData {#constructor-5}

> **RadarSweepComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata). |

## Properties

### {{% prop-heading "controllableSpeedThreshold" %}}

> **float**

### {{% prop-heading "controllableSweepRadius" %}}

> **float**

### {{% prop-heading "controllableSweepInterval" %}}

> **float**

### {{% prop-heading "mineSweepInterval" %}}

> **float**

### {{% prop-heading "mineSweepRadius" %}}

> **float**

### {{% prop-heading "sweepForMines" %}}

> **bool**

### {{% prop-heading "sweepForControllables" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata) type.

