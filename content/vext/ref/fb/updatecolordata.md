---
title: UpdateColorData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[UpdateColorData](#constructor-0)**() |
| **[UpdateColorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UpdateColorData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[UpdateColorData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[UpdateColorData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UpdateColorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UpdateColorData {#constructor-0}

> **UpdateColorData**()

Creates a new [UpdateColorData](/vext/ref/fb/updatecolordata) frostbite instance.

### UpdateColorData {#constructor-1}

> **UpdateColorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UpdateColorData](/vext/ref/fb/updatecolordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UpdateColorData {#constructor-2}

> **UpdateColorData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [UpdateColorData](/vext/ref/fb/updatecolordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [UpdateColorData](/vext/ref/fb/updatecolordata). |

### UpdateColorData {#constructor-3}

> **UpdateColorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [UpdateColorData](/vext/ref/fb/updatecolordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [UpdateColorData](/vext/ref/fb/updatecolordata). |

### UpdateColorData {#constructor-4}

> **UpdateColorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UpdateColorData](/vext/ref/fb/updatecolordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UpdateColorData](/vext/ref/fb/updatecolordata). |

## Properties

### {{% prop-heading "color" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UpdateColorData](/vext/ref/fb/updatecolordata) type.

