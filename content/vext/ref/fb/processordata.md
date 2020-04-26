---
title: ProcessorData
---

Inherits from [EmitterComponentData](/vext/ref/fb/emittercomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[ProcessorData](#constructor-0)**() |
| **[ProcessorData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ProcessorData](#constructor-2)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[ProcessorData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultValues" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "nextProcessor" >}} | [ProcessorData](/vext/ref/fb/processordata) \| nil |
| {{< prop "pre" >}} | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) \| nil |
| {{< prop "evaluatorInput" >}} | [EmittableField](/vext/ref/fb/emittablefield) |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ProcessorData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ProcessorData {#constructor-0}

> **ProcessorData**()

Creates a new [ProcessorData](/vext/ref/fb/processordata) frostbite instance.

### ProcessorData {#constructor-1}

> **ProcessorData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ProcessorData](/vext/ref/fb/processordata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ProcessorData {#constructor-2}

> **ProcessorData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [ProcessorData](/vext/ref/fb/processordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [ProcessorData](/vext/ref/fb/processordata). |

### ProcessorData {#constructor-3}

> **ProcessorData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ProcessorData](/vext/ref/fb/processordata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ProcessorData](/vext/ref/fb/processordata). |

## Properties

### {{% prop-heading "defaultValues" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "nextProcessor" %}}

> **[ProcessorData](/vext/ref/fb/processordata)** \| **nil**

### {{% prop-heading "pre" %}}

> **[EmitterComponentData](/vext/ref/fb/emittercomponentdata)** \| **nil**

### {{% prop-heading "evaluatorInput" %}}

> **[EmittableField](/vext/ref/fb/emittablefield)**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ProcessorData](/vext/ref/fb/processordata) type.

