import { Autocomplete } from '@/components/Autocomplete';
import { Button } from '@/components/Button';
import { CheckboxGroup } from '@/components/CheckboxGroup';
import { Combobox } from '@/components/Combobox';
import { DatePicker } from '@/components/DatePicker';
import { DateRange, DateRangePicker } from '@/components/DateRangePicker';
import { FormItem } from '@/components/FormItem';
import { Input } from '@/components/Input';
import { MultiSelect } from '@/components/MultiSelect';
import { RadioGroup } from '@/components/RadioGroup';
import { SingleSelect } from '@/components/Select';
import { SwitchGroup } from '@/components/SwitchGroup';
import { Textarea } from '@/components/Textarea';
import {
  clouds,
  databases,
  features,
  frameworks,
  languages,
  libraries,
  projectTypes,
  settingsOptions,
  themeOptions,
  tools,
} from '@/constants';
import { useState } from 'react';

const App: React.FC = () => {
  // Text inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [uppercaseText, setUppercaseText] = useState('');
  const [lowercaseText, setLowercaseText] = useState('');
  const [trimmedText, setTrimmedText] = useState('');
  const [trimmedUpperText, setTrimmedUpperText] = useState('');

  // Single selects
  const [framework, setFramework] = useState('');
  const [database, setDatabase] = useState('');
  const [language, setLanguage] = useState('');
  const [theme, setTheme] = useState('');
  const [library, setLibrary] = useState('');

  // Date inputs
  const [startDate1, setStartDate1] = useState<Date>();
  const [endDate1, setEndDate1] = useState<Date>();
  const [startDate2, setStartDate2] = useState<Date>();
  const [endDate2, setEndDate2] = useState<Date>();
  const [dateRange1, setDateRange1] = useState<DateRange>({});
  const [dateRange2, setDateRange2] = useState<DateRange>({});

  // Multi selects
  const [selectedClouds, setSelectedClouds] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // Switches
  const [settings, setSettings] = useState<string[]>([]);

  // Checkboxes
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Radio
  const [projectType, setProjectType] = useState('web');

  // Simulated async search function
  const searchLibraries = async (query: string) => {
    // Simulate API latency
    await new Promise(resolve => setTimeout(resolve, 500));

    // Filter libraries based on query
    return libraries.filter(
      lib =>
        lib.label.toLowerCase().includes(query.toLowerCase()) ||
        lib.value.toLowerCase().includes(query.toLowerCase()),
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Summit UI</h1>
          <p className="text-muted-foreground mt-2">Configure your development environment</p>
        </div>

        <div className="space-y-6">
          {/* Text Inputs with Transformations */}
          <div className="space-y-4">
            <FormItem label="Uppercase Text" hintText="This text will always be uppercase">
              <Input
                transform="uppercase"
                placeholder="Type something..."
                value={uppercaseText}
                onChange={e => setUppercaseText(e.target.value)}
              />
            </FormItem>

            <FormItem label="Lowercase Text" hintText="This text will always be lowercase">
              <Input
                transform="lowercase"
                placeholder="Type something..."
                value={lowercaseText}
                onChange={e => setLowercaseText(e.target.value)}
              />
            </FormItem>

            <FormItem label="Trimmed Text" hintText="This text will always be trimmed">
              <Input
                transform="trim"
                placeholder="Type something..."
                value={trimmedText}
                onChange={e => setTrimmedText(e.target.value)}
              />
            </FormItem>

            <FormItem
              label="Trimmed & Uppercase Text"
              hintText="This text will be trimmed and converted to uppercase"
            >
              <Input
                transform={['trim', 'uppercase']}
                placeholder="Type something..."
                value={trimmedUpperText}
                onChange={e => setTrimmedUpperText(e.target.value)}
              />
            </FormItem>

            <FormItem label="Name" hintText="Your full name as it will appear in the project">
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormItem>

            <FormItem label="Email" hintText="Your work email address for project communications">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormItem>

            <FormItem label="Company" hintText="The organization you represent">
              <Input
                id="company"
                placeholder="Enter your company"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </FormItem>

            <FormItem
              label="Project Description"
              hintText="A brief overview of your project's goals and requirements"
              errorText={
                description.length > 20 ? 'Project description must be 20 characters or less' : null
              }
            >
              <Textarea
                id="description"
                placeholder="Describe your project in 20 characters or less..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </FormItem>
          </div>

          {/* Theme Select */}
          <FormItem label="Theme" hintText="Select your preferred theme">
            <SingleSelect
              options={themeOptions}
              value={theme}
              onChange={setTheme}
              placeholder="Select theme..."
            />
          </FormItem>

          {/* Library Combobox */}
          <FormItem label="Library" hintText="Search and select from over 140 React libraries">
            <Combobox
              options={libraries}
              value={library}
              onChange={setLibrary}
              placeholder="Select library..."
              searchPlaceholder="Search libraries..."
            />
          </FormItem>

          {/* Async Search with Autocomplete */}
          <FormItem
            label="React Library Search"
            hintText="Search through 140+ React libraries with async loading"
          >
            <Autocomplete
              loadOptions={searchLibraries}
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search libraries..."
              debounceMs={500}
              minSearch={1}
            />
          </FormItem>

          {/* Switches */}
          <FormItem
            label="Project Settings"
            hintText="Configure your project's visibility and licensing"
          >
            <SwitchGroup
              options={settingsOptions}
              value={settings}
              onChange={setSettings}
              columns={1}
            />
          </FormItem>

          {/* Radio Buttons */}
          <FormItem
            label="Project Type"
            hintText="Select the primary type of application you're building"
          >
            <RadioGroup options={projectTypes} value={projectType} onChange={setProjectType} />
          </FormItem>

          {/* Checkbox Group */}
          <FormItem label="Features" hintText="Select all the features you need in your project">
            <CheckboxGroup
              options={features}
              value={selectedFeatures}
              onChange={setSelectedFeatures}
            />
          </FormItem>

          {/* Single Selects */}
          <div className="space-y-4">
            <FormItem label="Framework" hintText="Choose the primary framework for your project">
              <Combobox
                options={frameworks}
                value={framework}
                onChange={setFramework}
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
              />
            </FormItem>

            <FormItem label="Database" hintText="Select the main database for your application">
              <Combobox
                options={databases}
                value={database}
                onChange={setDatabase}
                placeholder="Select database..."
                searchPlaceholder="Search database..."
              />
            </FormItem>

            <FormItem
              label="Primary Language"
              hintText="Choose the main programming language for development"
            >
              <Combobox
                options={languages}
                value={language}
                onChange={setLanguage}
                placeholder="Select language..."
                searchPlaceholder="Search language..."
              />
            </FormItem>
          </div>

          {/* Date Inputs */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormItem label="Project Start" hintText="When development begins">
                <DatePicker value={startDate1} onChange={setStartDate1} placeholder="Pick a date" />
              </FormItem>

              <FormItem label="Project End" hintText="Expected completion date">
                <DatePicker value={endDate1} onChange={setEndDate1} placeholder="Pick a date" />
              </FormItem>
            </div>

            <FormItem label="Project Duration" hintText="Select the start and end dates">
              <DateRangePicker
                value={dateRange1}
                onChange={setDateRange1}
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
              />
            </FormItem>

            <div className="grid grid-cols-2 gap-4">
              <FormItem label="Maintenance Start" hintText="When support period begins">
                <DatePicker value={startDate2} onChange={setStartDate2} placeholder="Pick a date" />
              </FormItem>

              <FormItem label="Maintenance End" hintText="Support period end date">
                <DatePicker value={endDate2} onChange={setEndDate2} placeholder="Pick a date" />
              </FormItem>
            </div>

            <FormItem
              label="Maintenance Period"
              hintText="Select the maintenance start and end dates"
            >
              <DateRangePicker
                value={dateRange2}
                onChange={setDateRange2}
                placeholder={{
                  from: 'Start date',
                  to: 'End date',
                }}
              />
            </FormItem>
          </div>

          {/* Multi Selects */}
          <div className="space-y-4">
            <FormItem label="Cloud Providers" hintText="Select all cloud platforms you plan to use">
              <MultiSelect
                options={clouds}
                value={selectedClouds}
                onChange={setSelectedClouds}
                placeholder="Select cloud providers..."
                searchPlaceholder="Search cloud providers..."
              />
            </FormItem>

            <FormItem
              label="Development Tools"
              hintText="Choose the development tools for your team"
            >
              <MultiSelect
                options={tools}
                value={selectedTools}
                onChange={setSelectedTools}
                placeholder="Select development tools..."
                searchPlaceholder="Search tools..."
              />
            </FormItem>

            <FormItem
              label="Additional Languages"
              hintText="Other programming languages used in the project"
            >
              <MultiSelect
                options={languages}
                value={selectedLanguages}
                onChange={setSelectedLanguages}
                placeholder="Select languages..."
                searchPlaceholder="Search languages..."
              />
            </FormItem>
          </div>

          <Button className="w-full" size="lg">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
