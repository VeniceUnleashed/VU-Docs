---
title: ValueSelectorNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[ValueSelectorNodeData](#constructor-0)**() |
| **[ValueSelectorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ValueSelectorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ValueSelectorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [ValueSelectorEntry](/vext/ref/fb/valueselectorentry)[] |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "defaultCaseValue" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ValueSelectorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ValueSelectorNodeData {#constructor-0}

> **ValueSelectorNodeData**()

Creates a new [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) frostbite instance.

### ValueSelectorNodeData {#constructor-1}

> **ValueSelectorNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ValueSelectorNodeData {#constructor-2}

> **ValueSelectorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). |

### ValueSelectorNodeData {#constructor-3}

> **ValueSelectorNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). |

## Properties

### {{% prop-heading "inputs" %}}

> **[ValueSelectorEntry](/vext/ref/fb/valueselectorentry)**[]

### {{% prop-heading "value" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "defaultCaseValue" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) type.

