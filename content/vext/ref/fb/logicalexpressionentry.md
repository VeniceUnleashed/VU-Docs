---
title: LogicalExpressionEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[LogicalExpressionEntry](#constructor-0)**() |
| **[LogicalExpressionEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LogicalExpressionEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[LogicalExpressionEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LogicalExpressionEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LogicalExpressionEntry {#constructor-0}

> **LogicalExpressionEntry**()

Creates a new [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry) frostbite instance.

### LogicalExpressionEntry {#constructor-1}

> **LogicalExpressionEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LogicalExpressionEntry {#constructor-2}

> **LogicalExpressionEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry). |

### LogicalExpressionEntry {#constructor-3}

> **LogicalExpressionEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry). |

## Properties

### {{% prop-heading "trigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry) type.

