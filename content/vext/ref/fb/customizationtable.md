---
title: CustomizationTable
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CustomizationTable](#constructor-0)**() |
| **[CustomizationTable](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CustomizationTable](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockParts" >}} | [CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CustomizationTable" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CustomizationTable {#constructor-0}
> **CustomizationTable**()

Creates a new [CustomizationTable](/vext/ref/fb/customizationtable) frostbite instance.

### CustomizationTable {#constructor-1}
> **CustomizationTable**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CustomizationTable](/vext/ref/fb/customizationtable) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CustomizationTable {#constructor-2}
> **CustomizationTable**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizationTable](/vext/ref/fb/customizationtable). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CustomizationTable](/vext/ref/fb/customizationtable). |

## Properties
### {{% prop-heading "unlockParts" %}}
> **[CustomizationUnlockParts](/vext/ref/fb/customizationunlockparts)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CustomizationTable](/vext/ref/fb/customizationtable) type.

