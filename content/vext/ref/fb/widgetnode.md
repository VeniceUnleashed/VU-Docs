---
title: WidgetNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[WidgetNode](#constructor-0)**() |
| **[WidgetNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WidgetNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[WidgetNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "widgetAsset" >}} | [UIWidgetAsset](/vext/ref/fb/uiwidgetasset) \| nil |
| {{< prop "focusIndex" >}} | int |
| {{< prop "zDepthLevel" >}} | int |
| {{< prop "verticalAlign" >}} | [WidgetVerticalAlignment](/vext/ref/fb/widgetverticalalignment) |
| {{< prop "horisontalAlign" >}} | [WidgetHorisontalAlignment](/vext/ref/fb/widgethorisontalalignment) |
| {{< prop "dataBinding" >}} | [UIDataBinding](/vext/ref/fb/uidatabinding) \| nil |
| {{< prop "widgetProperties" >}} | [UIWidgetProperty](/vext/ref/fb/uiwidgetproperty)[] |
| {{< prop "instanceName" >}} | string |
| {{< prop "inputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "alwaysInFocus" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WidgetNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WidgetNode {#constructor-0}
> **WidgetNode**()

Creates a new [WidgetNode](/vext/ref/fb/widgetnode) frostbite instance.

### WidgetNode {#constructor-1}
> **WidgetNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WidgetNode](/vext/ref/fb/widgetnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WidgetNode {#constructor-2}
> **WidgetNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [WidgetNode](/vext/ref/fb/widgetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [WidgetNode](/vext/ref/fb/widgetnode). |

### WidgetNode {#constructor-3}
> **WidgetNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WidgetNode](/vext/ref/fb/widgetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WidgetNode](/vext/ref/fb/widgetnode). |

## Properties
### {{% prop-heading "widgetAsset" %}}
> **[UIWidgetAsset](/vext/ref/fb/uiwidgetasset)** | **nil**

### {{% prop-heading "focusIndex" %}}
> **int**

### {{% prop-heading "zDepthLevel" %}}
> **int**

### {{% prop-heading "verticalAlign" %}}
> **[WidgetVerticalAlignment](/vext/ref/fb/widgetverticalalignment)**

### {{% prop-heading "horisontalAlign" %}}
> **[WidgetHorisontalAlignment](/vext/ref/fb/widgethorisontalalignment)**

### {{% prop-heading "dataBinding" %}}
> **[UIDataBinding](/vext/ref/fb/uidatabinding)** | **nil**

### {{% prop-heading "widgetProperties" %}}
> **[UIWidgetProperty](/vext/ref/fb/uiwidgetproperty)**[]

### {{% prop-heading "instanceName" %}}
> **string**

### {{% prop-heading "inputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "outputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "alwaysInFocus" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WidgetNode](/vext/ref/fb/widgetnode) type.

