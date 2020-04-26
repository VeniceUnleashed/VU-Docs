---
title: SystemSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SystemSettings](#constructor-0)**() |
| **[SystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SystemSettings {#constructor-0}
> **SystemSettings**()

Creates a new [SystemSettings](/vext/ref/fb/systemsettings) frostbite instance.

### SystemSettings {#constructor-1}
> **SystemSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SystemSettings](/vext/ref/fb/systemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SystemSettings {#constructor-2}
> **SystemSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SystemSettings](/vext/ref/fb/systemsettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SystemSettings](/vext/ref/fb/systemsettings). |

## Properties
### {{% prop-heading "name" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SystemSettings](/vext/ref/fb/systemsettings) type.

