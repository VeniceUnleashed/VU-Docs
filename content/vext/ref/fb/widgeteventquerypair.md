---
title: WidgetEventQueryPair
---


## Summary
### Constructors
| |
| ----------- |
| **[WidgetEventQueryPair](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "query" >}} | [UIWidgetEventID](/vext/ref/fb/uiwidgeteventid) |
| {{< prop "instanceName" >}} | string |
| {{< prop "isOutput" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WidgetEventQueryPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WidgetEventQueryPair {#constructor-0}
> **WidgetEventQueryPair**()

Creates a new [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "query" %}}
> **[UIWidgetEventID](/vext/ref/fb/uiwidgeteventid)**

### {{% prop-heading "instanceName" %}}
> **string**

### {{% prop-heading "isOutput" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WidgetEventQueryPair](/vext/ref/fb/widgeteventquerypair) type.

