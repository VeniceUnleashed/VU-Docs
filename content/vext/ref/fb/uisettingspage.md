---
title: UISettingsPage
---


## Summary
### Constructors
| |
| ----------- |
| **[UISettingsPage](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nameSid" >}} | string |
| {{< prop "settingsGroups" >}} | [UISettingsGroup](/vext/ref/fb/uisettingsgroup)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UISettingsPage](/vext/ref/fb/uisettingspage) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UISettingsPage" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UISettingsPage {#constructor-0}
> **UISettingsPage**()

Creates a new [UISettingsPage](/vext/ref/fb/uisettingspage) frostbite structure.

## Properties
### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "settingsGroups" %}}
> **[UISettingsGroup](/vext/ref/fb/uisettingsgroup)**[]

## Methods
### Clone
> **Clone**(): [UISettingsPage](/vext/ref/fb/uisettingspage)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UISettingsPage](/vext/ref/fb/uisettingspage)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UISettingsPage](/vext/ref/fb/uisettingspage) type.

