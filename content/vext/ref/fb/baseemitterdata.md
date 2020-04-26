---
title: BaseEmitterData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[BaseEmitterData](#constructor-0)**() |
| **[BaseEmitterData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BaseEmitterData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[BaseEmitterData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[BaseEmitterData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "emitterAsset" >}} | [EmitterDocument](/vext/ref/fb/emitterdocument) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BaseEmitterData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BaseEmitterData {#constructor-0}

> **BaseEmitterData**()

Creates a new [BaseEmitterData](/vext/ref/fb/baseemitterdata) frostbite instance.

### BaseEmitterData {#constructor-1}

> **BaseEmitterData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BaseEmitterData](/vext/ref/fb/baseemitterdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BaseEmitterData {#constructor-2}

> **BaseEmitterData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [BaseEmitterData](/vext/ref/fb/baseemitterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [BaseEmitterData](/vext/ref/fb/baseemitterdata). |

### BaseEmitterData {#constructor-3}

> **BaseEmitterData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [BaseEmitterData](/vext/ref/fb/baseemitterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [BaseEmitterData](/vext/ref/fb/baseemitterdata). |

### BaseEmitterData {#constructor-4}

> **BaseEmitterData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BaseEmitterData](/vext/ref/fb/baseemitterdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BaseEmitterData](/vext/ref/fb/baseemitterdata). |

## Properties

### {{% prop-heading "emitterAsset" %}}

> **[EmitterDocument](/vext/ref/fb/emitterdocument)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BaseEmitterData](/vext/ref/fb/baseemitterdata) type.

