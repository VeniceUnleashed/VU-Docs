---
title: UpdateTextureCoordsData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[UpdateTextureCoordsData](#constructor-0)**() |
| **[UpdateTextureCoordsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UpdateTextureCoordsData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[UpdateTextureCoordsData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[UpdateTextureCoordsData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textureInfo1" >}} | [EmitterTextureInfo](/vext/ref/fb/emittertextureinfo) |
| {{< prop "textureBlendValue" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UpdateTextureCoordsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UpdateTextureCoordsData {#constructor-0}

> **UpdateTextureCoordsData**()

Creates a new [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata) frostbite instance.

### UpdateTextureCoordsData {#constructor-1}

> **UpdateTextureCoordsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UpdateTextureCoordsData {#constructor-2}

> **UpdateTextureCoordsData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). |

### UpdateTextureCoordsData {#constructor-3}

> **UpdateTextureCoordsData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). |

### UpdateTextureCoordsData {#constructor-4}

> **UpdateTextureCoordsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata). |

## Properties

### {{% prop-heading "textureInfo1" %}}

> **[EmitterTextureInfo](/vext/ref/fb/emittertextureinfo)**

### {{% prop-heading "textureBlendValue" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UpdateTextureCoordsData](/vext/ref/fb/updatetexturecoordsdata) type.

