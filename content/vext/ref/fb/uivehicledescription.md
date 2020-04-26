---
title: UIVehicleDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UIVehicleDescription](#constructor-0)**() |
| **[UIVehicleDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIVehicleDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIVehicleDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "texturePath" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIVehicleDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIVehicleDescription {#constructor-0}
> **UIVehicleDescription**()

Creates a new [UIVehicleDescription](/vext/ref/fb/uivehicledescription) frostbite instance.

### UIVehicleDescription {#constructor-1}
> **UIVehicleDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIVehicleDescription](/vext/ref/fb/uivehicledescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIVehicleDescription {#constructor-2}
> **UIVehicleDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIVehicleDescription](/vext/ref/fb/uivehicledescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIVehicleDescription](/vext/ref/fb/uivehicledescription). |

### UIVehicleDescription {#constructor-3}
> **UIVehicleDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIVehicleDescription](/vext/ref/fb/uivehicledescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIVehicleDescription](/vext/ref/fb/uivehicledescription). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "texturePath" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIVehicleDescription](/vext/ref/fb/uivehicledescription) type.

