---
title: LogicalExpressionNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[LogicalExpressionNodeData](#constructor-0)**() |
| **[LogicalExpressionNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LogicalExpressionNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[LogicalExpressionNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry)[] |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "operator" >}} | [LogicalExpressionOperator](/vext/ref/fb/logicalexpressionoperator) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LogicalExpressionNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LogicalExpressionNodeData {#constructor-0}
> **LogicalExpressionNodeData**()

Creates a new [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata) frostbite instance.

### LogicalExpressionNodeData {#constructor-1}
> **LogicalExpressionNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LogicalExpressionNodeData {#constructor-2}
> **LogicalExpressionNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata). |

### LogicalExpressionNodeData {#constructor-3}
> **LogicalExpressionNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata). |

## Properties
### {{% prop-heading "inputs" %}}
> **[LogicalExpressionEntry](/vext/ref/fb/logicalexpressionentry)**[]

### {{% prop-heading "trigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "operator" %}}
> **[LogicalExpressionOperator](/vext/ref/fb/logicalexpressionoperator)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LogicalExpressionNodeData](/vext/ref/fb/logicalexpressionnodedata) type.

