---
title: DestructionVolumeData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[DestructionVolumeData](#constructor-0)**() |
| **[DestructionVolumeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DestructionVolumeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "boundingBox" >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "asset" >}} | [DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset) \| nil |
| {{< prop "impacts" >}} | [Vec4](/vext/ref/shared/type/vec4)[] |
| {{< prop "partToImpactIndices" >}} | int[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DestructionVolumeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DestructionVolumeData {#constructor-0}

> **DestructionVolumeData**()

Creates a new [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) frostbite instance.

### DestructionVolumeData {#constructor-1}

> **DestructionVolumeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DestructionVolumeData {#constructor-2}

> **DestructionVolumeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DestructionVolumeData](/vext/ref/fb/destructionvolumedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DestructionVolumeData](/vext/ref/fb/destructionvolumedata). |

## Properties

### {{% prop-heading "boundingBox" %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "asset" %}}

> **[DestructionVolumeAsset](/vext/ref/fb/destructionvolumeasset)** \| **nil**

### {{% prop-heading "impacts" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**[]

### {{% prop-heading "partToImpactIndices" %}}

> **int**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DestructionVolumeData](/vext/ref/fb/destructionvolumedata) type.

