---
title: EdgeModelLightMapData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[EdgeModelLightMapData](#constructor-0)**() |
| **[EdgeModelLightMapData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EdgeModelLightMapData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lightMapUvs" >}} | [Vec4](/vext/ref/shared/type/vec4)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelLightMapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EdgeModelLightMapData {#constructor-0}

> **EdgeModelLightMapData**()

Creates a new [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) frostbite instance.

### EdgeModelLightMapData {#constructor-1}

> **EdgeModelLightMapData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EdgeModelLightMapData {#constructor-2}

> **EdgeModelLightMapData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata). |

## Properties

### {{% prop-heading "lightMapUvs" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) type.

