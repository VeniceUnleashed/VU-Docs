---
title: SpawnDirectionData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[SpawnDirectionData](#constructor-0)**() |
| **[SpawnDirectionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpawnDirectionData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[SpawnDirectionData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[SpawnDirectionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "directionFromEmitterOrigin" >}} | float |
| {{< prop "inheritSpeedAndDirectionFromEmitter" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnDirectionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnDirectionData {#constructor-0}

> **SpawnDirectionData**()

Creates a new [SpawnDirectionData](/vext/ref/fb/spawndirectiondata) frostbite instance.

### SpawnDirectionData {#constructor-1}

> **SpawnDirectionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpawnDirectionData](/vext/ref/fb/spawndirectiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpawnDirectionData {#constructor-2}

> **SpawnDirectionData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). |

### SpawnDirectionData {#constructor-3}

> **SpawnDirectionData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). |

### SpawnDirectionData {#constructor-4}

> **SpawnDirectionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpawnDirectionData](/vext/ref/fb/spawndirectiondata). |

## Properties

### {{% prop-heading "directionFromEmitterOrigin" %}}

> **float**

### {{% prop-heading "inheritSpeedAndDirectionFromEmitter" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpawnDirectionData](/vext/ref/fb/spawndirectiondata) type.

