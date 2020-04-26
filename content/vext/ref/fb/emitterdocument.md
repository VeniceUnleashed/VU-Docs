---
title: EmitterDocument
---

Inherits from [EmitterAsset](/vext/ref/fb/emitterasset)

## Summary

### Constructors

|  |
| --- |
| **[EmitterDocument](#constructor-0)**() |
| **[EmitterDocument](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EmitterDocument](#constructor-2)**(other: [EmitterAsset](/vext/ref/fb/emitterasset)) |
| **[EmitterDocument](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EmitterDocument](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rootProcessor" >}} | [ProcessorData](/vext/ref/fb/processordata) \| nil |
| {{< prop "templateData" >}} | [EmitterTemplateData](/vext/ref/fb/emittertemplatedata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EmitterDocument" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EmitterDocument {#constructor-0}

> **EmitterDocument**()

Creates a new [EmitterDocument](/vext/ref/fb/emitterdocument) frostbite instance.

### EmitterDocument {#constructor-1}

> **EmitterDocument**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EmitterDocument](/vext/ref/fb/emitterdocument) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EmitterDocument {#constructor-2}

> **EmitterDocument**(other: [EmitterAsset](/vext/ref/fb/emitterasset))

Casts an instance of type [EmitterAsset](/vext/ref/fb/emitterasset) to [EmitterDocument](/vext/ref/fb/emitterdocument). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterAsset](/vext/ref/fb/emitterasset) | The instance to cast to [EmitterDocument](/vext/ref/fb/emitterdocument). |

### EmitterDocument {#constructor-3}

> **EmitterDocument**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EmitterDocument](/vext/ref/fb/emitterdocument). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EmitterDocument](/vext/ref/fb/emitterdocument). |

### EmitterDocument {#constructor-4}

> **EmitterDocument**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EmitterDocument](/vext/ref/fb/emitterdocument). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EmitterDocument](/vext/ref/fb/emitterdocument). |

## Properties

### {{% prop-heading "rootProcessor" %}}

> **[ProcessorData](/vext/ref/fb/processordata)** \| **nil**

### {{% prop-heading "templateData" %}}

> **[EmitterTemplateData](/vext/ref/fb/emittertemplatedata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EmitterDocument](/vext/ref/fb/emitterdocument) type.

