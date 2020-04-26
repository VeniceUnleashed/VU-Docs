---
title: ValueSelectorEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[ValueSelectorEntry](#constructor-0)**() |
| **[ValueSelectorEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ValueSelectorEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[ValueSelectorEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "input" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "caseValue" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ValueSelectorEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ValueSelectorEntry {#constructor-0}

> **ValueSelectorEntry**()

Creates a new [ValueSelectorEntry](/vext/ref/fb/valueselectorentry) frostbite instance.

### ValueSelectorEntry {#constructor-1}

> **ValueSelectorEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ValueSelectorEntry](/vext/ref/fb/valueselectorentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ValueSelectorEntry {#constructor-2}

> **ValueSelectorEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [ValueSelectorEntry](/vext/ref/fb/valueselectorentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [ValueSelectorEntry](/vext/ref/fb/valueselectorentry). |

### ValueSelectorEntry {#constructor-3}

> **ValueSelectorEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ValueSelectorEntry](/vext/ref/fb/valueselectorentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ValueSelectorEntry](/vext/ref/fb/valueselectorentry). |

## Properties

### {{% prop-heading "input" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "caseValue" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ValueSelectorEntry](/vext/ref/fb/valueselectorentry) type.

