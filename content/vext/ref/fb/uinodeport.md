---
title: UINodePort
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UINodePort](#constructor-0)**() |
| **[UINodePort](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UINodePort](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "instanceName" >}} | string |
| {{< prop "query" >}} | [UIWidgetEventID](/vext/ref/fb/uiwidgeteventid) |
| {{< prop "allowManualRemove" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UINodePort" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UINodePort {#constructor-0}
> **UINodePort**()

Creates a new [UINodePort](/vext/ref/fb/uinodeport) frostbite instance.

### UINodePort {#constructor-1}
> **UINodePort**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UINodePort](/vext/ref/fb/uinodeport) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UINodePort {#constructor-2}
> **UINodePort**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodePort](/vext/ref/fb/uinodeport). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UINodePort](/vext/ref/fb/uinodeport). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "instanceName" %}}
> **string**

### {{% prop-heading "query" %}}
> **[UIWidgetEventID](/vext/ref/fb/uiwidgeteventid)**

### {{% prop-heading "allowManualRemove" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UINodePort](/vext/ref/fb/uinodeport) type.

