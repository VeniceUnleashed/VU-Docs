---
title: SimpleValueSelectorNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[SimpleValueSelectorNodeData](#constructor-0)**() |
| **[SimpleValueSelectorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SimpleValueSelectorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SimpleValueSelectorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "outValues" >}} | float[] |
| {{< prop "index" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SimpleValueSelectorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SimpleValueSelectorNodeData {#constructor-0}

> **SimpleValueSelectorNodeData**()

Creates a new [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata) frostbite instance.

### SimpleValueSelectorNodeData {#constructor-1}

> **SimpleValueSelectorNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SimpleValueSelectorNodeData {#constructor-2}

> **SimpleValueSelectorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata). |

### SimpleValueSelectorNodeData {#constructor-3}

> **SimpleValueSelectorNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata). |

## Properties

### {{% prop-heading "outValues" %}}

> **float**[]

### {{% prop-heading "index" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SimpleValueSelectorNodeData](/vext/ref/fb/simplevalueselectornodedata) type.

